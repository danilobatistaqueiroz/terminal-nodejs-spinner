import ora from 'ora';

let spinner = ora('Loading unicorns').start();

function changes() {
	spinner.fail('Fail')
	spinner.start('Loading unicorns')
	spinner.color = spinner.color=='cyan'?'yellow':'cyan';
	spinner.text = spinner.text=='Loading unicorns'?'Loading rainbows':'Loading unicorns';
	setTimeout( ()=> {spinner.succeed('great improvement'); console.log('🦄 unicorn completed')}, 1000);
};

setTimeout( changes , 1000);