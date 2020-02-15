from django.test import TestCase

class PyCalViewTest(TestCase):

    def test_calculation_api_is_responding(self):
        response = self.client.post(
                path = '/api/calculate',
                data = { 'expression': '10 + 20' }
            )
        self.assertEqual(response.status_code, 200)

    def test_expression_is_correctly_evaluated(self):
        response = self.client.post(
                path = '/api/calculate',
                data = { 'expression': '10 + 20' }
            )
        self.assertIn(b'{"display":"30","expression":"10 + 20"}', response.content)

    def test_handling_of_empty_request(self):
        response = self.client.post('/api/calculate')
        self.assertEqual(response.status_code, 422)

    def test_handling_of_invalid_syntax(self):
        response = self.client.post(
                path = '/api/calculate',
                data = { 'expression': '10 & 20' }
            )
        self.assertEqual(response.status_code, 422)
