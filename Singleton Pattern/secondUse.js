// import FancyLogger from '../singleton pattern/fancyLogger.js'
// const logger = new FancyLogger()

// export default  function logSecondImplementation(){
//     logger.printLogCount()
//     logger.log('Second File')
//     logger.printLogCount()
// }

import logger from '../singleton pattern/fancyLogger.js'

export default  function logSecondImplementation(){
        logger.printLogCount()
        logger.log('Second File')
        logger.printLogCount()
    }