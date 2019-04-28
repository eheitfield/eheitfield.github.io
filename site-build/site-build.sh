#!/bin/bash
pageList="index our-congress doppler-ball visual-task-timer placemark magic-castle our-congress-privacy visual-task-timer-privacy visual-task-timer-automation"
for page in $pageList
do 
	outfile="$page"'.html'
	bodyfile="$page"'-body.htm'
	cat head.htm $bodyfile foot.htm > ../$outfile
done
echo "Site build complete"
