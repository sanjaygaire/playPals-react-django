from rest_framework.serializers import ModelSerializer

from user.models import CustomUser


class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'name', 'is_active', 'is_staff']

        read_only_fields = ['id']