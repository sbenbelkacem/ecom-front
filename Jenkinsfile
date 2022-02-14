node("slave-ic"){

  stage("checkout"){
    checkout([$class: 'GitSCM', branches: [[name: '*/develop']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/sbenbelkacem/ecom-front']]])
   }

  stage("build"){
    sh "npm install"
    sh "ng build --prod"
    stash includes: 'dist/ecom-front/**', name: 'livrable-front'
    stash includes: 'Dockerfile', name: 'front-dockerfile'
    stash includes: 'docker-compose.yaml', name: 'front-dockerfile-compose'
    stash includes: 'conf/*', name: 'nginx-configuration'
    stash includes: 'launch.sh', name: 'front-launch'
  }

  stage("quality check"){
//    sh "sonar-scanner \\\n" +
//      "  -Dsonar.projectKey=ecom-front \\\n" +
//      "  -Dsonar.sources=. \\\n" +
//      "  -Dsonar.host.url=http://54.234.48.131:11001 \\\n" +
//      "  -Dsonar.login=58fbac0ef213ed20cf54051639f2e7a8d5429073"
  }

  node("vm-deploy"){
    stage("deploy"){
      unstash 'livrable-front'
      unstash 'front-dockerfile'
      unstash 'front-dockerfile-compose'
      unstash 'nginx-configuration'
      unstash 'front-launch'
      sh "chmod 777 launch.sh"
      sh "./launch.sh"
    }
  }


}
