from django.test import TestCase


class RootTest(TestCase):

    def test_root_view_is_loaded(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_correct_template_is_loaded(self):
        response = self.client.get('/')
        self.assertTemplateUsed(response, 'index.html')
