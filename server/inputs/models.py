from django.db import models

class RestaurantData(models.Model):
    restaurant_name = models.CharField(max_length=100)
    restaurant_address = models.CharField(max_length=255)

    # Item details
    item_name = models.CharField(max_length=100)
    variation = models.CharField(max_length=100, blank=True, null=True)
    item_quantity = models.FloatField()
    item_price = models.FloatField()
    item_total = models.FloatField()
    
    # Conversion details
    converted_qty = models.FloatField(blank=True, null=True)
    conversion_qty = models.FloatField(blank=True, null=True)
    
    # Financial details
    sub_total = models.FloatField()
    grand_total = models.FloatField()
    final_total = models.FloatField()
    service_charge_amount = models.FloatField(blank=True, null=True)
    service_charge_rate = models.FloatField(blank=True, null=True)
    delivery_charges = models.FloatField(blank=True, null=True)
    vat_amount = models.FloatField(blank=True, null=True)
    cgst_amount = models.FloatField(blank=True, null=True)
    sgst_amount = models.FloatField(blank=True, null=True)
    igst = models.FloatField(blank=True, null=True)
    
    # Discounts
    total_consumption = models.FloatField(blank=True, null=True)
    discount = models.FloatField(blank=True, null=True)
    outlet_discount = models.FloatField(blank=True, null=True)
    aggregator_discount = models.FloatField(blank=True, null=True)
    
    # Delivery and Customer details
    delivery_status = models.CharField(max_length=50, blank=True, null=True)
    reason = models.CharField(max_length=255, blank=True, null=True)
    customer_name = models.CharField(max_length=100)
    customer_phone = models.CharField(max_length=15)
    customer_address = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.item_name} - {self.restaurant_name}'
    

class RestraurantTransaction(models.Model):
    # Transaction Details
    order_no = models.CharField(max_length=100)
    order_id = models.CharField(max_length=100)
    invoice_no = models.CharField(max_length=100)
    pos_invoice_no = models.CharField(max_length=100)
    kot_no = models.CharField(max_length=100)
    kot_id_k = models.CharField(max_length=100)

    # Timestamps
    order_acceptance_time = models.DateTimeField(null=True, blank=True)
    rider_arrival_time = models.DateTimeField(null=True, blank=True)
    received_time = models.DateTimeField(null=True, blank=True)
    accepted_time = models.DateTimeField(null=True, blank=True)
    delivery_charges = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    delivered_time = models.DateTimeField(null=True, blank=True)
    prepared_time_k = models.DateTimeField(null=True, blank=True)
    punch_time_k = models.DateTimeField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    created_date = models.DateField(null=True, blank=True)
    timestamp = models.DateTimeField(null=True, blank=True)
    first_print_date = models.DateField(null=True, blank=True)
    first_print_date_bsr = models.DateField(null=True, blank=True)
    last_settlement_date = models.DateField(null=True, blank=True)
    last_settlement_date_bsr = models.DateField(null=True, blank=True)

    # Status Information
    status = models.CharField(max_length=50)
    order_status = models.CharField(max_length=50)
    kot_item_status = models.CharField(max_length=50)
    order_type = models.CharField(max_length=50)
    order_type_k = models.CharField(max_length=50)
    delivery_status = models.CharField(max_length=50)
    item_status_k = models.CharField(max_length=50)
    settled_by = models.CharField(max_length=50, null=True, blank=True)
    settled_by_bsr = models.CharField(max_length=50, null=True, blank=True)
    settled_total = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    # Other Transactional Fields
    server_name = models.CharField(max_length=100)
    biller_name = models.CharField(max_length=100)
    biller = models.CharField(max_length=100)
    brand_grouping = models.CharField(max_length=100)
    client_sharing_code = models.CharField(max_length=100)
    payment_type = models.CharField(max_length=50)
    payment_type_detail = models.CharField(max_length=50)
    order_from = models.CharField(max_length=100)
    aggregator_order_no = models.CharField(max_length=100)
    area = models.CharField(max_length=100)
    month = models.CharField(max_length=20)
    date = models.DateField(null=True, blank=True)
    category = models.CharField(max_length=100)
    category_name = models.CharField(max_length=100)
    non_taxable = models.BooleanField(default=False)
    change_log = models.TextField(null=True, blank=True)
    tax = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    gst_paid_by_merchant = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    gst_paid_by_ecommerce = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    waived_off = models.BooleanField(default=False)
    duration_in_minutes = models.IntegerField(null=True, blank=True)
    duration_in_minutes_bsr = models.IntegerField(null=True, blank=True)
    delivery_charges = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    # def _str_(self):
    #     return f'Transaction {self.order_id} - {self.order_status}'

