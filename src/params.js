import {Dimensions} from 'react-native';

const params = {
    blockSize: 40,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, //proporção do painel superior 
    difficultLevel : 0.1,
    getColumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount() {
        const totalHeigth = Dimensions.get('window').height
        const boardHeigth = totalHeigth * (1 - this.headerRatio)
        // const boardHeigth = 0.85
        return Math.floor(boardHeigth / this.blockSize )
    }
} 

export default params