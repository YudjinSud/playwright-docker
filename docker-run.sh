docker start "e2e-local"  --attach || \
 docker run -it --rm --platform=linux/amd64 --name "e2e-local" --network=host \
 -v $(pwd):/work/ -w /work/ mcr.microsoft.com/playwright:focal "/bin/bash" "docker-entrypoint.sh"
