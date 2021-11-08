// import FancyLogger from '../singleton pattern/fancyLogger.js'
// const logger = new FancyLogger()

// export default  function logFirstImplementation(){
//     logger.printLogCount()
//     logger.log('First File')
//     logger.printLogCount()
// }

import logger from '../singleton pattern/fancyLogger.js'

export default  function logFirstImplementation(){
        logger.printLogCount()
        logger.log('First File')
        logger.printLogCount()
    }