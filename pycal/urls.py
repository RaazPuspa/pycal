from django.conf.urls import url, include
from backend import urls

urlpatterns = [
    url(r'^api/', include(urls)),
    url('', include('frontend.urls')),
]
