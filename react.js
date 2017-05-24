class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded" id="navBar">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="toggleB">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#" onClick={this.props.homePage} id="brand">Keon Samuel Web Developer</a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active" onClick={this.props.about}>
        <a className="nav-link" href="#" id="about">About<span className="sr-only">(current)</span></a>
      </li>
       <li className="nav-item dropdown" >
        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.props.portfolio} id="portfolio">
          Portfolio
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#" onClick={this.props.reactH}>React</a>
          <a className="dropdown-item" href="#" onClick={this.props.jqueryH}>Jquery & JavaScript</a>
          <a className="dropdown-item" href="#" onClick={this.props.pureHTMLH}>Pure HTML & CSS3</a>
        </div>
      </li>
      <li className="nav-item" onClick={this.props.contact}>
    <a className="nav-link" href="#" id="contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
    );
  }
}

class About extends React.Component{
constructor(props){
  super(props);
}
  render() {
    return (
      <div id="aSection">
        <h3 className="text-center" >About Me</h3>
        <p id="aP">A front-end web developer that have a front-end certificate from freecodecamp.com in JavaScript programming. I am a natural problem solver so I generally excelled in the algorithmic aspect of programming. See more about me and my projects on this website.</p>
        <div className="row">
         <div className="col-6">
           <img src="http://s19.postimg.org/ooxjho437/1462585665_wrench.png" />
         </div>
         <div className="col-6"> 
         <h4>Skills</h4>
          <p>React, D3, JavaScript, HTML5, CSS3, BootStrap & SCSS</p>
        </div>
        </div>
        <div className="row">
         <div className="col-6">
         <img src="http://s19.postimg.org/8gqhzoa0j/1462587652_pencil.png" />
          </div>
         <div className="col-6">
         <h4>Projects Completed</h4>
         
          <h5> React Projects </h5>
           <p>Game Of Life, Recipe Box, Campers LeaderBoard & Markdown Previewer </p>
          <h5> Jquery & JavaScript </h5>
           <p>Simon Game, Tic Tac Toe, Pomodoro Clock, JavaScript Calculator, Twitch T.V, Wikipedia Viewer, Local Weather & Quote Machine</p>
          <h5> Pure HTML & CSS3</h5> 
           <p> A Tribute Page to Dr. Ralph Gonsalves</p>
          </div>
       </div>
      </div>
    );
  }
}

class Portfolio extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id="pSection">
        <h3 className="text-center">PORTFOLIO</h3>
        { this.props.reactP && <div> 
         <h4>React Projects</h4>
          <div className='firstList'>
           <div className="thumbnail">
            <img src="http://www.careydissmore.com/wp-content/uploads/2012/02/In_Production_Fullscreen_logo.png.png" alt="An image stating that my Rouguelike Dungeon Crawler Game in still in production" />
            <div className="caption">
             <p>Roguelike Dungeon Crawler Game</p>
            </div>
           </div>
           <div className="thumbnail">
            <img src="http://www.careydissmore.com/wp-content/uploads/2012/02/In_Production_Fullscreen_logo.png.png" alt="An image stating that Game of Game is still a working progress" />
            <div className="caption">
             <p>Game of Life</p>
            </div>
           </div>
           <div className="thumbnail">
            <img src="https://image.ibb.co/fhXKna/Screenshot_2017_05_22_at_6_37_20_PM.png" alt="Image of my Recipe Box project" />
            <div className="caption">
             <p>Recipe Box</p>
            </div>
           </div>
          <div className="thumbnail">
            <img src="https://image.ibb.co/nFTELv/Screenshot_2017_05_22_at_6_43_07_PM.png" alt="Image of the Campers LeaderBoard project" />
            <div className="caption">
             <p>Campers LeaderBoard</p>
            </div>
            </div>
           <div className="thumbnail">
            <img src="https://image.ibb.co/b9ZX7a/Screenshot_2017_05_22_at_6_48_51_PM.png" alt="Image of the Markdown Previewer project" />
            <div className="caption">
             <p>Markdown Previewer</p>
            </div>
           </div>
           {/* first section*/}
          </div>
          </div> }
        {this.props.jAndJP && <div>
        <h4>Jquery Projects</h4>
         <div className='secondList'>
           <div className="thumbnail">
            <img src="https://image.ibb.co/mAt3DF/Screenshot_2017_05_22_at_6_57_51_PM.png" alt="Image of my Simon Game project" />
            <div className="caption">
             <p>Simon Game</p>
            </div>
           </div>
           <div className="thumbnail">
            <img src="https://image.ibb.co/mAoQSa/Screenshot_2017_05_22_at_6_59_47_PM.png" alt="An image of my Tic Tac Toe" />
            <div className="caption">
             <p>Tic Tac Toe</p>
            </div>
           </div>
           <div className="thumbnail">
            <img src="https://image.ibb.co/bNkYDF/Screenshot_2017_05_22_at_7_02_13_PM.png" alt="Image of my Pomodoro Clock project" />
            <div className="caption">
             <p>Pomodoro Clock App</p>
            </div>
           </div> 
           <div className="thumbnail">
            <img src="https://image.ibb.co/gktaSa/Screenshot_2017_05_22_at_7_01_01_PM.png" alt="Image of my JavaScript Calculator project" />
            <div className="caption">
             <p>JavaScript Calculator</p>
            </div>
           </div>
           <div className="thumbnail">
            <img src="https://image.ibb.co/kPCr0v/Screenshot_2017_05_22_at_7_07_03_PM.png" alt="An image of my Twitch Stream Api App" />
            <div className="caption">
             <p>Twitch Streamers</p>
            </div>
           </div>
           <div className="thumbnail">
            <img src="https://image.ibb.co/fx2DDF/Screenshot_2017_05_22_at_7_07_58_PM.png" alt="Image of my Wikipedia Viewer project" />
            <div className="caption">
             <p>Wikipedia Viewer</p>
            </div>
           </div> 
           <div className="thumbnail">
            <img src="https://image.ibb.co/jtEzna/Screenshot_2017_05_22_at_7_03_58_PM.png" alt="Image of my Weather App project" />
            <div className="caption">
             <p>Weather App</p>
            </div>
           </div>
           <div className="thumbnail">
            <img src="https://image.ibb.co/i0zX7a/Screenshot_2017_05_22_at_6_54_55_PM.png" alt="An image of my Quote Machine Api App" />
            <div className="caption">
             <p>Quotes Machine</p>
            </div>
           </div>
           {/* end of secondList */}
        </div>
       </div> }
        
        {this.props.htmlP && <div>
      <h4>Pure HTML5 & CSS3</h4>
        <div className='thirdList'>
           <div className="thumbnail">
            <img src="https://image.ibb.co/cgDg0v/Screenshot_2017_05_22_at_6_51_26_PM.png" alt="Image of my Tribute page of Dr. Ralph Gonsalves project" />
            <div className="caption">
             <p>Tribute to Dr. Ralph Gonsalves</p>
            </div>
           </div>
        </div>
        {/*end of thirdList*/}
       </div> }
     </div>
    );
  }
}

class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      par: false,
      name: ''
    } 
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({
      par: true,
      name: document.getElementById('name').value
    });
  }
  render() {
    return (
     <div className="contactMeSec">
       <h3 className="text-center">Contact Me </h3>
       <h4>Name:</h4>
        <input type="text" className="form-control" placeholder="Name" id="name" />
       <h4>Email Address:</h4>
    <input type="text" className="form-control" placeholder="Email Address"id="Email Address" />
       <h4>Phone Number:</h4>
      <input type="text" className="form-control" placeholder="Phone Number "id="Phonenumber" />
       <h4>Message:</h4>
    <textarea className="form-control" placeholder="Message"id="message" />
        {this.state.par && <p>Hello {this.state.name}, this form is not currently work because I don't know back-end development as of yet.Please use my email at keonsamuel95@gmail.com</p> }
    <button className="btn btn-primary" type="submit" onClick={this.handleClick}><i className="fa fa-paper-plane"></i>Submit</button>
     </div>
    );
  }
}

class Footer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="footerSec">
        <span>© Written & Coded by Keon Samuel</span>
      <div className="icons">  
       <a href="https://www.linkedin.com/in/keon-samuel-371a6aab/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
       <a href="https://www.freecodecamp.com/keonsam"><i className="fa fa-free-code-camp" aria-hidden="true" target="_blank"></i></a>
       <a href="https://plus.google.com/u/0/114820644259483346360"><i className="fa fa-google-plus" aria-hidden="true" target="_blank"></i>
</a>
       <a href="https://codepen.io/keonsamuel/">
       <i className="fa fa-codepen" aria-hidden="true" target="_blank"></i></a>
        </div>
      </div>
    );
  }
}

class App extends React.Component{
constructor(props){
  super(props);
  this.state = {
    about: true,
    portfolio:  true,
    contact: true,
    react: true,
    jAndJ: true,
    hTML: true,
  }
  this.handleHomePage = this.handleHomePage.bind(this);
  this.handleAbout = this.handleAbout.bind(this);
  this.handlePortfolio = this.handlePortfolio.bind(this);
  this.handleContact = this.handleContact.bind(this);
  this.handleReact = this.handleReact.bind(this);
  this.handleJAndJ = this.handleJAndJ.bind(this);
  this.handleHTML = this.handleHTML.bind(this);
}
  handleReact() {
    this.setState({
      react: true,
      jAndJ: false,
      hTML: false
    });
  }
  
  handleJAndJ() {
    this.setState({
      react: false,
      jAndJ: true,
      hTML: false
    });
  }
  
  handleHTML() {
    this.setState({
      react: false,
      jAndJ: false,
      hTML: true
    });
  }
  handleHomePage() {
    //A simple home page click function for codepen purpose.
    this.setState({
      about: true,
      portfolio: true,
      contact: true
    });
  }
  handleAbout() {
    this.setState({
      about: true,
      portfolio: false,
      contact: false,
    });
  }
  
  handlePortfolio(){
    this.setState({
    about: false,
    portfolio: true,
    contact: false,
    react: true,
    jAndJ: true,
    hTML: true
  });
  }
  
  handleContact() {
    this.setState({
      about: false,
      portfolio: false,
      contact: true
    });
  }
  
  
  render() {
    return (
     <div>
      <Header homePage={this.handleHomePage} about={this.handleAbout} portfolio={this.handlePortfolio} contact={this.handleContact} reactH={this.handleReact} jqueryH={this.handleJAndJ} pureHTMLH={this.handleHTML}/>
        {this.state.about && <About />}
        {this.state.portfolio && <Portfolio reactP={this.state.react} jAndJP={this.state.jAndJ} htmlP={this.state.hTML}/>}
        {this.state.contact && <Contact />}
      <Footer />
     </div>
    );
  }
}
             
ReactDOM.render(<App />, document.getElementById('app'));
