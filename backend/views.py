from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class PyCalView(APIView):

    def post(self, request, *args, **kw):
        return Response(None, status = status.HTTP_200_OK)
