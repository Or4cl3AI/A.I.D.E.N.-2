const LiquidGenerativeConvolutionalCognitiveRecurrentAttentiveAdversarialProgressiveNeuralNetwork = require('./LiquidGenerativeConvolutionalCognitiveRecurrentAttentiveAdversarialProgressiveNeuralNetwork');

const network = new LiquidGenerativeConvolutionalCognitiveRecurrentAttentiveAdversarialProgressiveNeuralNetwork(
  [
    {
      filters: [[1.0, 2.0, 3.0], [4.0, 5.0, 6.0]],
      kernel_size: [3, 3],
      stride: [1, 1],
      activation: "relu"
    }
  ],
  [
    {
      hidden_size: 64,
      num_hidden_layers: 2,
      activation: "tanh"
    }
  ],
  [
    {
      hidden_size: 128,
      num_attention_heads: 8,
      activation: "sigmoid"
    }
  ],
  [
    {
      hidden_size: 32,
      num_hidden_layers: 1,
      activation: "relu"
    }
  ],
  [
    {
      hidden_size: 256,
      num_hidden_layers: 3,
      activation: "tanh"
    }
  ]
);

const mutatedNetwork = network.mutate(0.1);

console.log(mutatedNetwork);