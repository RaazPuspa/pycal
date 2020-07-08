import re


class PyCal(object):

    def __init__(self, expression, *args, **kw):
        self.expression = expression
        pass

    def calculate(self):
        regex = re.compile('[0-9. +-×÷]+$')

        if not regex.match(self.expression):
            raise SyntaxError

        expression = self.expression
        expression = expression.replace('×', '*')
        expression = expression.replace('÷', '/')

        display = round(eval(expression), 8)

        return {
            'display': str(display),
            'expression': self.expression,
        }
