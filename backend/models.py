class PyCal(object):

    def __init__(self, expression, *args, **kw):
        self.expression = expression
        pass

    def calculate(self):
        expression = self.expression
        expression = expression.replace('×', '*')
        expression = expression.replace('÷', '/')

        display = round(eval(expression), 8)

        return {
            'display': str(display),
            'expression': self.expression,
        }
