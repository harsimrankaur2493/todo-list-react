pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                script {
                    docker.build("my-app-image:${env.BUILD_ID}", ".")
                }
            }
        }
        
        stage('Test') {
            steps {
                sh 'docker run my-app-image:${env.BUILD_ID} npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'docker tag my-app-image:${env.BUILD_ID} my-app-image:latest'
                sh 'docker push my-registry/my-app-image:latest'
            }
        }
    }
    
    post {
        always {
            sh 'docker system prune -f'
        }
    }
}
