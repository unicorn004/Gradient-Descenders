from django.shortcuts import render
from django.http import JsonResponse
import numpy as np
import pandas as pd
from django.shortcuts import render
import plotly.graph_objs as go
import plotly.io as pio


def home_view(request):
    return render(request, 'Home.html')

def figure(request):
    np.random.seed(9615)

    N = 100
    df = pd.DataFrame((.1 * (np.random.random((N, 5)) - .5)).cumsum(0),
                      columns=['a', 'b', 'c', 'd', 'e'])

    # Create Plotly figure
    fig = go.Figure()

    for key in df.columns:
        fig.add_trace(go.Scatter(
            x=df.index, y=df[key], mode='lines', name=key,
            line=dict(width=2),
            fill='tonexty',
            fillcolor='rgba(0, 100, 80, 0.2)'
        ))

    fig.update_layout(
        xaxis_title='x',
        yaxis_title='y',
        title='Interactive legend',
        template='plotly_white'
    )

    html_fig = pio.to_html(fig, full_html=False)

    return render(request, "DashBoard.html", {'active_page': 'DashBoard.html', 'div_figure': html_fig})