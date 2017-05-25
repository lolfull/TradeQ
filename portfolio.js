/**
 * Created by Frank Liang on 5/22/2017.
 */
function Portfolio() {
	this.totalAssets = 1000;
	this.investments = new Object();

	this.addAssets = function(amount){
		this.totalAssets += amount;
	}

	this.addNewStock = function(stockId, units){
		this.investments[stockId] = units;
	}

    this.getCurrentStockPrice=function(stockId){
        return 2;
    }

	//BUY METHOD
	this.buyStocks = function(stockId, units){
		var index = this.investments.indexOf(stockId);

        //User doesn't have shares of this stock already
		if( index < 0){
			this.addNewStock(stockId, units);
		}
		//User already has shares of this stock
		else{
			this.investments[stockId] += units;
		}

		//Take the money away from the user's balance
		this.addAssets(-units * this.getCurrentStockPrice(stockId));
	}

	//SELL METHOD
	this.sellStocks=function(stockId, units){
		var index = this.investments.indexOf(stockId);

		//User doesn't have shares of this stock
		if(index < 0 || this.investments[stockId] < 0){
			throw DOMException;
		}
		//This stock is cleared
		else if(this.investments[stockId] == 0){
            delete this.investments[stockId];
        }
        //An amount of the stocks are sold
		else{
			this.investments[stockId] -= units;
		}

		this.addAssets(units * this.getCurrentStockPrice(stockId));
	}
}

	
