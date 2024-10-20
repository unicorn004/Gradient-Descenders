from django.db import models
from django.db import models
from sklearn.tree import DecisionTreeClassifier
import joblib


# Create your models here.
class EcomSales(models.Model):
    date = models.DateTimeField()
    predictions = models.CharField(max_length=100, blank=True)

    def save(self, *args, **kwargs):
        ml_model = joblib.load('ML Models/sales_forecaster.joblib')
        self.predictions = ml_model.predict(
            [[self.date]])
        return super().save(*args, *kwargs)
