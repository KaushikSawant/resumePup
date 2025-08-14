pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/KaushikSawant/resumePup.git'
            }
        }

        stage('Install Node.js Locally') {
    steps {
        sh '''
            # Install nvm (Node Version Manager) if not installed
            if [ ! -d "$HOME/.nvm" ]; then
                curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
            fi

            # Load nvm into this shell session
            export NVM_DIR="$HOME/.nvm"
            [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

            # Install Node.js LTS version
            nvm install --lts
            nvm use --lts

            # Verify installation
            node -v
            npm -v
        '''
    }
}


        stage('Install Dependencies') {
            steps {
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                    npm install
                '''
            }
        }

        stage('Build React App') {
            steps {
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                    npm run build
                '''
            }
        }

        stage('Deploy to Linux Server') {
            steps {
                sshPublisher(publishers: [
                    sshPublisherDesc(
                        configName: 'LinuxServer',
                        transfers: [
                            sshTransfer(
                                sourceFiles: 'build/**',
                                removePrefix: 'build',
                                remoteDirectory: '/var/www/resume',
                                execCommand: 'sudo systemctl reload nginx'
                            )
                        ],
                        usePromotionTimestamp: false
                    )
                ])
            }
        }
    }
}
