variable "resource_group_name" {
  type        = string
  default     = "full-stack-k8s-rg"
}

variable "location" {
  type        = string
  default     = "UK South"
}

variable "cluster_name" {
  description = "The name of the AKS cluster"
  type        = string
  default     = "full-stack-k8s-aks"
}

variable "dns_prefix" {
  description = "The DNS prefix for the AKS cluster"
  type        = string
  default     = "fullstackk8s"
}

variable "node_count" {
  description = "The number of nodes in the default node pool"
  type        = number
  default     = 1
}

variable "vm_size" {
  description = "The size of the VMs in the default node pool"
  type        = string
  default     = "Standard_DS2_v2"
}

variable "tags" {
  description = "Tags to apply to the resources"
  type        = map(string)
  default     = {Project = "Full Stack K8's Project"}
}
