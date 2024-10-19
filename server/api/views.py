from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

import numpy as np

import pandas as pd

import matplotlib.pyplot as plt

import mpld3

from django.http import JsonResponse


def home_view(request):
    return render(request, 'Home.html')

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import mpld3
from django.shortcuts import render
import plotly.graph_objs as go
import plotly.io as pio

# def figure(request):
#     np.random.seed(9615)

#     N = 100
#     df = pd.DataFrame((.1 * (np.random.random((N, 5)) - .5)).cumsum(0),
#                       columns=['a', 'b', 'c', 'd', 'e'])

#     # plot line + confidence interval
#     fig, ax = plt.subplots()
#     ax.grid(True, alpha=0.3)

#     for key, val in df.items():
#         l, = ax.plot(val.index, val.values, label=key)
#         ax.fill_between(val.index,
#                         val.values * .5, val.values * 1.5,
#                         color=l.get_color(), alpha=.4)
#     ax.set_xlabel('x')
#     ax.set_ylabel('y')
#     ax.set_title('Interactive legend', size=20)

#     html_fig = mpld3.fig_to_html(fig, template_type='general')
#     plt.close(fig)

#     return render(request, "DashBoard.html", {'active_page': 'DashBoard.html', 'div_figure': html_fig})


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