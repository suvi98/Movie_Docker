FROM  eclipse-temurin:17-jdk-alpine

COPY target/docker-0.0.1-SNAPSHOT.jar /user/app/

WORKDIR /user/app

RUN sh -c 'touch docker-0.0.1-SNAPSHOT.jar'

ENTRYPOINT ["java","-jar","docker-0.0.1-SNAPSHOT.jar"]



