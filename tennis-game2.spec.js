function TennisGame(){
this.reset = () => {

    }
  this.echo =()  =>{
    return 'Fifteen - Love'
  }

}


test('Echo"Fifteen - Love"PlayyerA get score',() =>{

//Arrange
let app = new TennisGame()

//Act
app.reset()
let result = app.echo()
//Assert
expect(result).toBe('Fifteen - Love')
})
