#!/bin/bash
pageList="index our-congress doppler-ball visual-task-timer"
for page in $pageList
do 
	outfile="$page"'.html'
	bodyfile="$page"'-body.htm'
	cat head.htm $bodyfile foot.htm > ../$outfile
done
echo "Site build complete"
