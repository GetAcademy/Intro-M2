        const model = {
            currentPage: 'calculations',

            inputs: {
                calculations: {},
                addCalculation: {
                    number: null,
                    operation: '+',
                    isHighlight: false,
                },
            },

            operations: ['+', '-', '*', '/'],

            calculations: [{
                number: 123,
                mathOperation: '+',
                isHighlight: true,
            }, {
                number: 40,
                mathOperation: '-',
            }, {
                number: 2,
                mathOperation: '*',
            }, ],
        };