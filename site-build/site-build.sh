#!/bin/bash
pageList="index tex-anywhere our-congress doppler-ball visual-task-timer placemark magic-castle our-congress-privacy visual-task-timer-privacy placemark-privacy visual-task-timer-automation tex-anywhere-privacy radix radix-privacy"
for page in $pageList
do 
	outfile="$page"'.html'
	bodyfile="$page"'-body.htm'
	cat head.htm $bodyfile foot.htm > ../$outfile
done
echo "Site build complete"
