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
                this.carData = res.data[0]
                this.carData.price = 54.136
            }).catch((error) => {
                console.error(error);
            });
        },
        getDatatype(value, key) {
            if (isNaN(value)) {
                return 'VARCHAR(20)'
            } else if (!isNaN(value) && key == 'year') {
                return 'YEAR'
            }
            else if (!isNaN(value) && key == 'price') {
                return 'DECIMAL(6,3)'
            }
            else {
                return 'TINYINT'
            }
        }

    }
}).mount('#app')