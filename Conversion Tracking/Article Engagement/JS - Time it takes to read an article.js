function calculateReadTime(){
	var WPM = 500; // Words per minute for a super-fast reader
 	var expecedReadTimeInSeconds = ({{JS - Word Count}} / WPM) * 60;

	return expecedReadTimeInSeconds;
}