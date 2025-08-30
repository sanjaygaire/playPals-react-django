from django.shortcuts import render
from rest_framework import viewsets

from core.apps.user.models import User
from core.apps.user.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer   