from django.contrib import admin
from django.urls import path
from django.http import HttpResponse
from . import views


def home(request):
    return HttpResponse("Django 已成功运行。")


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", home),
    path("hello/", views.hello_world),
]