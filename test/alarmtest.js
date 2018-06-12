const AlarmContract = artifacts.require('Alarm.sol');

contract('Testing', async accounts => {

it('Testing buying tokens', async () => {

		let alarm = await AlarmContract.deployed({from: accounts[0]});
		const userAddress = accounts[0];
		const funding = web3.toWei(0.001,'ether');

		await alarm.buyToken({from: userAddress, value: funding});
		console.log(alarm.balanceOf.call(userAddress,{from: userAddress}));

        assert.equal(alarm.balanceOf(userAddress).toString(), 1);//expected '[object Promise]' to equal 1 - не понятно, где ошибка

		});

it('Testing setting alarm', async () => {

		let alarm = await AlarmContract.deployed({from: accounts[0]});
		const userAddress = accounts[0];
		const funding = web3.toWei(0.001,'ether');

        await alarm.buyToken({from: userAddress, value:funding });
		await alarm.setAlarm(2019,1,1,0,0,0, {from: userAddress});
		control = await alarm.mySetting.call({from: userAddress});
        assert.equal(control, 1546300800);

		});

it('Testing sending task', async () => {

		let alarm = await AlarmContract.deployed({from: accounts[0]});
		const userAddress = accounts[0];

		assert.equal(await alarm.taskSend.call({from: userAddress}), '1 + 2 = ', 'not equal');
		});

it('Testing answering', async () => {

		let alarm = await AlarmContract.deployed({from: accounts[0]});
		const userAddress = accounts[0];

		assert.equal(await alarm.taskAnswer.call(3, {from: userAddress}), 'great!');
		assert.equal(await alarm.taskAnswer.call(7, {from: userAddress}), 'sorry, your token burned');

		});

});