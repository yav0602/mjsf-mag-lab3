import { CategoriesService } from '@/services/categories.service'
import httpClient from '@/utils/http-client'

import { ProductsService } from './products.service'
import { UsersService } from './users.service'

class ServiceProvider {
  /**
   * Service instances
   */
  serviceInstances: Record<string, any> = {}

  /**
   * Get cruise service
   */
  getCategoriesService(): CategoriesService {
    if (!this.serviceInstances.cruiseService) {
      this.serviceInstances.cruiseService = new CategoriesService(httpClient)
    }
    return this.serviceInstances.cruiseService
  }

  /**
   * Get products service
   */
  getProductsService(): ProductsService {
    const serviceName = 'productsService'
    if (!this.hasServiceInstance(serviceName)) {
      const newServiceInstance = new ProductsService(httpClient)
      this.setServiceInstance(serviceName, newServiceInstance)
    }

    return this.serviceInstances[serviceName]
  }

  /**
   * Get users service
   */
  getUsersService(): ProductsService {
    const serviceName = 'usersService'
    if (!this.hasServiceInstance(serviceName)) {
      const newServiceInstance = new UsersService(httpClient)
      this.setServiceInstance(serviceName, newServiceInstance)
    }

    return this.serviceInstances[serviceName]
  }

  /**
   * Set service instance
   * @param serviceName
   * @param serviceInstance
   */
  setServiceInstance(serviceName: string, serviceInstance: any): void {
    this.serviceInstances[serviceName] = serviceInstance
  }

  /**
   * Check if service instance exists
   * @param serviceName
   */
  hasServiceInstance(serviceName: string): boolean {
    return !!this.serviceInstances[serviceName]
  }
}

const serviceProvider: ServiceProvider = new ServiceProvider()
export default serviceProvider
