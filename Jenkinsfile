pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/yourusername/your-repo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('ci-cd-demo-app')
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    sh 'docker stop ci-cd-demo || true'
                    sh 'docker rm ci-cd-demo || true'
                    sh 'docker run -d -p 3000:3000 --name ci-cd-demo ci-cd-demo-app'
                }
            }
        }
    }
}
