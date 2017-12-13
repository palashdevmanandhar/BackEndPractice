import React,{Component} from "react";

export default class SecondPage extends Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div>
          <div style={styles.MainPart}>
            <div style={styles.part1}>
              <div style={styles.part1a}><p>A</p></div>
              <div style={styles.part1b}><p>B</p></div>
              <div style={styles.part1c}><p>C</p></div>
              <div style={styles.part1d}><p>D</p></div>
            </div>
            <div style={styles.part2}>

            </div>
            <div style={styles.part3}>
                  <div style={styles.part2a}>
                  </div>
                  <div style={styles.part2b}>
                      <div style={styles.part2bone}>  </div>
                      <div style={styles.part2btwo}>
                          <h3><b>Business Analyst</b></h3>
                          <br/>
                          <b><p>Varies Across domains of “Competitive Analysis” and “Cognitive Behaviour” of DR. One will be responsible
                            designing (Unethical) Data Collection Methodologies and Profile Development for particular Individual or
                            Organisation in order to highlight upcoming milestones for Country, Institution, Individual. For Business
                            Analysis of order one with qualifies understanding of Humanities or Business Administration along with
                            Behavioural Economics Or Intelligence System Development should apply.
                          </p></b>
                          <br/>
                          <h4><b>Also</b></h4>
                          <b><p>One with interest across Theoretical Physics or Mathematical branches likewise Cryptography, Logarithms
                          or fuzzy’s of Mediaeval Histories as well as love for number and words in context of “Group of Humans” or
                          otherwise can also jump in.
                          </p></b>
                      </div>
                      <div style={styles.part2bthree}>  </div>
                      <div style={styles.part2bfour}>  <h3><b><p>
                      How did Japan’s Lost Decade in early 90’s created 10+ NewYork
                      Times Best Selling Authors?

                      </p></b></h3>  </div>
                  </div>
                  <div style={styles.part2c}>
                  </div>
                  <div style={styles.part2d}>
                      <div style={styles.part2done}>  </div>
                      <div style={styles.part2dtwo}>
                        <div style={styles.part2dtwoaaa}><h4><b>Business Analyst</b></h4> </div>
                        <div style={styles.part2dtwobbb}> </div>
                        <div style={styles.part2dtwoccc}><h4><b>Research Assistnat</b></h4>  </div>
                        <div style={styles.part2dtwoddd}> </div>
                        <div style={styles.part2dtwoeee}> <h4><b>Social Scientist</b></h4> </div>
                        <div style={styles.part2dtwofff}> </div>
                        <div style={styles.part2dtwoggg}> <h4><b> Journalist</b></h4> </div>
                      </div>
                      <div style={styles.part2dthree}>  </div>
                  </div>
                  <div style={styles.part2e}>
                  </div>
            </div>
            <div style={styles.part4}>
              <div style={styles.part4box}>
                <h3>Save</h3>
              </div>

            </div>
          </div>
      </div>
    )
  }

}

const styles={
  MainPart :{
    backgroundColor:'yellow',
    display:'flex',
    flexDirection:'column',
    height:'100vh',
    width:'100vw'
  },

  part1:{
    backgroundColor:'white',
    flex:6,
    display:'flex',
  },

  part1a:{
    backgroundColor:'white',
    flex:5,
  },
  part1b:{
    backgroundColor:'white',
    flex:85,
  },
  part1c:{

    flex:5
  },
  part1d:{
    backgroundColor:'white',
    flex:5
  },
  part2:{
    backgroundColor:'green',
    flex:1,

  },

  part2a:{
    flex:5,
    backgroundColor:'white'
  },

  part2b:{
    flex:55,
    backgroundColor:'brown',
    display:'flex',
    flexDirection:'column'

  },
  part2bone:{
    flex:1,
    backgroundColor:'white'
  },
  part2btwo:{
    flex:7,
    backgroundColor:'white',
    width : '100%' ,
    border: '1px solid grey',

  },
  part2bthree:{
    flex:1,
    backgroundColor:'white'
  },
  part2bfour:{
    flex:3,
    backgroundColor:'white',
    width : '100%' ,
    border: '1px solid grey',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },


  part2c:{
    flex:12,
    backgroundColor:'white',

  },

  part2d:{
    flex:21,
    backgroundColor:'white',
    display:'flex',
    flexDirection:'column'
  },
  part2done:{
    flex:5,
    backgroundColor:'white'
  },
  part2dtwo:{
    flex:4,
    backgroundColor:'white',
    flexDirection:'column',
    display:'flex'
  },

  part2dtwoaaa:{
    flex:20,
    backgroundColor:'white',
    width : '100%' ,
    border: '1px solid grey',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  part2dtwobbb:{
    flex:7,
    backgroundColor:'white'
  },
  part2dtwoccc:{
    flex:20,
    backgroundColor:'white',
    width : '100%' ,
    border: '1px solid grey',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  part2dtwoddd:{
    flex:7,
    backgroundColor:'white'
  },
  part2dtwoeee:{
    flex:20,
    backgroundColor:'white',
    width : '100%' ,
    border: '1px solid grey',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  part2dtwofff:{
    flex:7,
    backgroundColor:'white'
  },
  part2dtwoggg:{
    flex:20,
    backgroundColor:'white',
    width : '100%' ,
    border: '1px solid grey',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  part2dthree:{
    flex:3,
    backgroundColor:'white'
  },

  part2e:{
    flex:7,
    backgroundColor:'white'
  },
  part3:{
    backgroundColor:'white',
    flex:80,
    display:'flex'
  },
  part4:{
    backgroundColor:'white',
    flex:13,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },

  part4box:{
    display:'flex',
    backgroundColor:'blue',
    width: '6%' ,
    border: '2px solid black',
    alignItems:'center',
    justifyContent:'center',


  }
}
