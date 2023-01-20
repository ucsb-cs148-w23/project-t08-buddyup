from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    response = HttpResponse()
    response.write("<h1> Hello World! </h1>")
    response.write("<p> This is a test index page for lab01! </p>")

    return response
