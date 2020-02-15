from django.conf.urls import url
from .views import PyCalView

urlpatterns = [
    url(r'calculate$', PyCalView.as_view()),
]
