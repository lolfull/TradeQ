class User {
	constructor() {
		this.username = "Alice";
		this.password = "123";
		this.portfolio = new Portfolio();
	}
	
	setUsername(uName){
		if(uName != null){
			this.username = uName;
			return true;
		}
		else{
			return false;
		}
	}
	
	setPassword(pass){
		if(pass != null){
			this.password = pass;
			return true;
		}
		else{
			return false;
		}
	}
	
	test(){
		return "Test Output.";
	}
}