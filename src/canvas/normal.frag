in vec2 texcoord;

uniform sampler2D tex;

out vec4 diffuseColor;

void main()
{
    diffuseColor = vec4(texture(tex, texcoord).rgb, 1.0);
}
