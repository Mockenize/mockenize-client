#!/bin/bash
VERSION=$(xmllint --xpath "//*[local-name()='project']/*[local-name()='version']/text()" pom.xml)
echo "Detected version: $VERSION"

npm install grunt-cli -g
npm install
grunt 

if ![ $VERSION=~*SNAPSHOT* ]; then
	echo "Deploying Webjar"
	mvn deploy --settings .travis/maven-settings.xml
fi
