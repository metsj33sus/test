module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'node-example',
      script    : 'app.js',
      env: 
        env_production : {
          NODE_ENV: 'production'
        }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'deploy',
      host : '159.65.27.87',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '~/node-example',
      'post-deploy' : 'nvm install && npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
