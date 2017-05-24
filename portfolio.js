/**
 * Created by Frank Liang on 5/22/2017.
 */
function Portfolio() {
	this.totalAssets = 1000;
	this.investments = [];

	this.addAssets=function(amount){
		this.totalAssets += amount;
	}

	this.addNewStock=function(stockId){
		investments.push(stockId);
	}

	this.buyStocks = function(stockId, units){
		//User doesn't have shares of this stock
		if(this.investments.indexOf(stockId) < 0){

		}
	}

	this.sellStocks=function(stockId, units){

	}

	this.getCurrentStockPrice=function(stockId){
		return 2;
	}
}

	
