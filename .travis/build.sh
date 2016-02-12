#!/bin/bash

npm install grunt-cli -g
npm install

VERSION=$(xmllint --xpath "//*[local-name()='project']/*[local-name()='version']/text()" pom.xml)
echo "Detected version: $VERSION"

if ! [ $VERSION=~*SNAPSHOT* ]; then
	echo "Building RELEASE"
	mvn deploy --settings .travis/maven-settings.xml
fi
