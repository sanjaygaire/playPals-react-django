from rest_framework import serializers
from .models import User
from django.contrib.auth.password_validation import validate_password



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name', 'age', 'sports', 'location', 'matches_played', 'matches_won', 'profile_picture', 'verified']
        read_only_fields = ['id', 'matches_played', 'matches_won', 'verified']
        def create(self, validated_data):
            user = User.objects.create(
                email=validated_data['email'],
                name=validated_data.get('name', ''),
                age=validated_data.get('age', None),
                sports=validated_data.get('sports', ''),
                location=validated_data.get('location', ''),
            )
            user.set_password(validated_data['password'])
            user.save()
            return user