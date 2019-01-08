function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

//whisper("HELLO")

//describe('shout(string)', function() {
//  it('receives one argument and returns it in all caps', //function() {
   // expect(shout('hello')).toEqual('HELLO')
  //})
//})



function logShout(string) {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})

function logShout(string)
console.log(string)

var uppercase = whisper(string)
uppercase.toUpperCase() === uppercase
 

 
//var mixedCase = 'Hi there!'
 
//mixedCase.toLowerCase() === mixedCase // false
 
//mixedCase.toUpperCase() === mixedCase // false