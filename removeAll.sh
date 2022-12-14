bold=$(tput bold)
normal=$(tput sgr0)

./stop.sh
./stopNew.sh
sleep 20

echo "${bold}*************************************"
echo "Remove all"
echo "*************************************${normal}"

docker rm -vf $(docker ps -aq)
docker rmi -f $(docker images -aq)

docker network rm hlbprivacy3_mynetwork.com

rm -Rf ./config/networkFiles/node1/data/*
rm -Rf ./config/networkFiles/node2/data/*
rm -Rf ./config/networkFiles/node3/data/*
rm -Rf ./config/networkFiles/node4/data/*

