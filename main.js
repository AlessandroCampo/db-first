const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: 'https://api.api-ninjas.com/v1/cars?model=',
            carData: {}
        }
    },
    created() {
        this.getCars('viper')
    },
    methods: {
        getCars(model) {
            axios.get(this.apiUrl, {
                params: { model },
                headers: { 'X-Api-Key': 'eJCuyTUHZ9ezaDFseQaEjg==HaqyWYNmOzdO4f6F' },
            }).then((res) => {
                this.carData = res.data[0];
                this.carData.price = 23.125

                this.carData = {
                    id: Math.floor(Math.random() * 1000),
                    ...this.carData
                };

            }).catch((error) => {
                console.error(error);
            });
        },
        getDatatype(value, key) {
            if (isNaN(value)) {
                return 'VARCHAR(20)'
            } else if (!isNaN(value) && key == 'year') {
                return 'YEAR NOT NULL'
            }
            else if (!isNaN(value) && key == 'price') {
                return 'DECIMAL(6,3) NOT NULL'
            } else if (!isNaN(value) && key == 'id') {
                return 'SMALLINT NOT NULL AUTO_INCREMENT '
            }
            else {
                if (key.includes('_mpg')) {
                    return 'TINYINT NULL'
                } else {
                    return 'TINYINT NOT NULL'
                }

            }
        }

    }
}).mount('#app')