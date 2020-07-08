from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import PyCal


class PyCalView(APIView):

    def post(self, request, *args, **kw):
        expression = request.data.get('expression', None)

        try:
            if expression == None:
                raise SyntaxError

            pyCal = PyCal(expression, *args, **kw)
            result = pyCal.calculate()
            response = Response(result, status = status.HTTP_200_OK)
        except SyntaxError:
            result = {
                'message': 'Invalid character found in provided expression.'
            }
            response = Response(result, status = status.HTTP_422_UNPROCESSABLE_ENTITY)
        except:
            result = {
                'message': 'Something went wrong while evaluating the expression. Please try again.'
            }
            response = Response(result, status = status.HTTP_500_INTERNAL_SERVER_ERROR)

        return response
