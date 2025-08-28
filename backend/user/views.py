from django.shortcuts import render
from rest_framework import viewsets
from user.models import CustomUser
from user.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = []