# cns-edge-master

Docker:
- To build: "docker build -t cns-edge-master ."
- To run locally:
  - Either have local mongo database running OR
  - Run clustered in a swarm locally:
    - "docker swarm init"
    - "docker stack deploy -c docker-compose.yml cns-edge"
      - http://localhost:8080 exposes a cluster visualizer
      - http://localhost:3000 exposes the api
  
# cns-edge-master
