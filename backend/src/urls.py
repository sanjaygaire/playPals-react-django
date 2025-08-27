from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from user.views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet, basename="user")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),

    # ✅ JWT endpoints
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
