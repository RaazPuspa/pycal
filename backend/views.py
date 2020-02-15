from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import PyCal


class PyCalView(APIView):

    def post(self, request, *args, **kw):
        expression = request.data.get('expression', None)

        pyCal = PyCal(expression, *args, **kw)
        result = pyCal.calculate()
        response = Response(result, status = status.HTTP_200_OK)

        return response
