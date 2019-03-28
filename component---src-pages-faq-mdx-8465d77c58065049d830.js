;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    208: function(e, a, n) {
      'use strict'
      n.r(a),
        n.d(a, 'default', function() {
          return g
        }),
        n.d(a, '_frontmatter', function() {
          return u
        })
      n(53)
      var t = n(24),
        p = n.n(t),
        o = n(7),
        s = n.n(o),
        m = n(0),
        c = n.n(m),
        r = n(8),
        l = n(219),
        N = {},
        g = (function(e) {
          function a(a) {
            var n
            return ((n = e.call(this, a) || this).layout = l.a), n
          }
          return (
            s()(a, e),
            (a.prototype.render = function() {
              var e = this.props,
                a = e.components,
                n = p()(e, ['components'])
              return c.a.createElement(
                r.MDXTag,
                {
                  name: 'wrapper',
                  Layout: this.layout,
                  layoutProps: Object.assign({}, N, n),
                  components: a,
                },
                c.a.createElement(
                  r.MDXTag,
                  { name: 'h3', components: a },
                  'Why is there a blue outline around my element?',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'You may notice a blue outline around your reference element. The blue outline is\ncalled a focus ring; it lets keyboard users know which element on the page is\ncurrently in focus. Tippy adds an attribute to the element so that it can\nreceive focus if it natively cannot, so that keyboard users (e.g. blind users)\ncan access the tooltip without using a mouse.',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'Recommended: use the ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'focus-visible',
                  ),
                  ' polyfill:\n',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'a',
                      components: a,
                      parentName: 'p',
                      props: { href: 'https://github.com/WICG/focus-visible' },
                    },
                    'https://github.com/WICG/focus-visible',
                  ),
                  '. This will remove the outline for mouse\nusers but keep it visible for keyboard users.',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'If your tooltip is ',
                  c.a.createElement(
                    r.MDXTag,
                    { name: 'strong', components: a, parentName: 'p' },
                    'non-essential',
                  ),
                  ' (only acts as enhancement), then you can\ndisable the ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'a11y',
                  ),
                  ' option:',
                ),
                c.a.createElement(
                  r.MDXTag,
                  {
                    name: 'div',
                    components: a,
                    props: {
                      className: 'gatsby-highlight',
                      'data-language': 'js',
                    },
                  },
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'pre',
                      components: a,
                      parentName: 'div',
                      props: { className: 'language-js' },
                    },
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'pre',
                        props: { className: 'language-js' },
                      },
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token function' },
                        },
                        'tippy',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'div'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token definition property' },
                        },
                        'a11y',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ':',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token boolean' },
                        },
                        'false',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                    ),
                  ),
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'h3', components: a },
                  "I can't click things inside the tooltip",
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'To enable interactivity, set the ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'interactive',
                  ),
                  ' option to ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'true',
                  ),
                  '.',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'h3', components: a },
                  'My tooltip is hiding instantly after showing',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  "If you're using a ",
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'focus',
                  ),
                  ' trigger, for example on an ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    '<input>',
                  ),
                  ', make sure you\nalso set ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'hideOnClick: false',
                  ),
                  '.',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'h3', components: a },
                  'My tooltip is not working using ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'h3',
                      props: { className: 'language-text' },
                    },
                    'data-tippy',
                  ),
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  "Make sure Tippy's scripts are placed ",
                  c.a.createElement(
                    r.MDXTag,
                    { name: 'em', components: a, parentName: 'p' },
                    'before',
                  ),
                  ' your own scripts, at the very\nbottom of the page, like so:',
                ),
                c.a.createElement(
                  r.MDXTag,
                  {
                    name: 'div',
                    components: a,
                    props: {
                      className: 'gatsby-highlight',
                      'data-language': 'html',
                    },
                  },
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'pre',
                      components: a,
                      parentName: 'div',
                      props: { className: 'language-html' },
                    },
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'pre',
                        props: { className: 'language-html' },
                      },
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token doctype' },
                        },
                        '<!DOCTYPE html>',
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'html',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'head',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n    ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'title',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      'My page',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'title',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'head',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'body',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n    ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'button',
                        ),
                        ' ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-name' },
                          },
                          'data-tippy',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-value' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '=',
                          ),
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                          'Created automatically',
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      'Text',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'button',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n    ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'button',
                        ),
                        ' ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-name' },
                          },
                          'data-tippy-content',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-value' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '=',
                          ),
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                          'Created by function',
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      'Text',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'button',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n\n    ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token comment' },
                        },
                        '\x3c!-- Very end of the body --\x3e',
                      ),
                      '\n    ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'script',
                        ),
                        ' ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-name' },
                          },
                          'src',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-value' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '=',
                          ),
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                          'https://unpkg.com/popper.js@1/dist/umd/popper.min.js',
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      c.a.createElement(r.MDXTag, {
                        name: 'span',
                        components: a,
                        parentName: 'code',
                        props: {
                          className: 'token script language-javascript',
                        },
                      }),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'script',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n    ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'script',
                        ),
                        ' ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-name' },
                          },
                          'src',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token attr-value' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '=',
                          ),
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                          'https://unpkg.com/tippy.js@4',
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '"',
                          ),
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      c.a.createElement(r.MDXTag, {
                        name: 'span',
                        components: a,
                        parentName: 'code',
                        props: {
                          className: 'token script language-javascript',
                        },
                      }),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'script',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n    ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '<',
                          ),
                          'script',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: {
                            className: 'token script language-javascript',
                          },
                        },
                        '\n      ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token function' },
                          },
                          'tippy',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '(',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token string' },
                          },
                          "'button'",
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          ')',
                        ),
                        '\n    ',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'script',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'body',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token tag' },
                        },
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token tag' },
                          },
                          c.a.createElement(
                            r.MDXTag,
                            {
                              name: 'span',
                              components: a,
                              parentName: 'span',
                              props: { className: 'token punctuation' },
                            },
                            '</',
                          ),
                          'html',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '>',
                        ),
                      ),
                    ),
                  ),
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'h3', components: a },
                  'Changing data-tippy-',
                  '*',
                  ' attributes does not update the tooltip',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'Updating the data-tippy-',
                  '*',
                  ' attribute on an element will currently not update the\ntooltip. You must use the ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'a',
                      components: a,
                      parentName: 'p',
                      props: { href: '/tippyjs/methods#update-the-tippy' },
                    },
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'a',
                        props: { className: 'language-text' },
                      },
                      'set()',
                    ),
                    ' method',
                  ),
                  ' on a Tippy\ninstance.',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  "For example, let's say you want to update the ",
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'theme',
                  ),
                  ' for tooltips when changing\nbetween dark and light mode:',
                ),
                c.a.createElement(
                  r.MDXTag,
                  {
                    name: 'div',
                    components: a,
                    props: {
                      className: 'gatsby-highlight',
                      'data-language': 'js',
                    },
                  },
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'pre',
                      components: a,
                      parentName: 'div',
                      props: { className: 'language-js' },
                    },
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'pre',
                        props: { className: 'language-js' },
                      },
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token keyword' },
                        },
                        'const',
                      ),
                      ' instances ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token operator' },
                        },
                        '=',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token function' },
                        },
                        'tippy',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'.example'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token definition property' },
                        },
                        'theme',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ':',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'custom-dark'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\n\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token comment' },
                        },
                        '// When clicking the theme toggle button, you can do this:',
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token keyword' },
                        },
                        'const',
                      ),
                      ' newTheme ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token operator' },
                        },
                        '=',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'whatever'",
                      ),
                      '\ninstances',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'forEach',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token parameter' },
                        },
                        'instance',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token arrow operator' },
                        },
                        '=>',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      '\n  instance',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'set',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token definition property' },
                        },
                        'theme',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ':',
                      ),
                      ' newTheme ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                    ),
                  ),
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  "It's also possible to attach a ",
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'MutationObserver',
                  ),
                  ' to the reference elements and\nobserve mutations to attributes if need be, then call ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    '.set()',
                  ),
                  ' with the new\nvalues.',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'h3', components: a },
                  'Can I use the ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'h3',
                      props: { className: 'language-text' },
                    },
                    'title',
                  ),
                  ' attribute?',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'Yes. The ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'content',
                  ),
                  ' option can be a function that receives the reference element\nas an argument and returns a string or element.',
                ),
                c.a.createElement(
                  r.MDXTag,
                  {
                    name: 'div',
                    components: a,
                    props: {
                      className: 'gatsby-highlight',
                      'data-language': 'js',
                    },
                  },
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'pre',
                      components: a,
                      parentName: 'div',
                      props: { className: 'language-js' },
                    },
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'pre',
                        props: { className: 'language-js' },
                      },
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token function' },
                        },
                        'tippy',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'button'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token function' },
                        },
                        'content',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token parameter' },
                        },
                        'reference',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      '\n    ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token keyword' },
                        },
                        'const',
                      ),
                      ' title ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token operator' },
                        },
                        '=',
                      ),
                      ' reference',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'getAttribute',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'title'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\n    reference',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'removeAttribute',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'title'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\n    ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token flow keyword' },
                        },
                        'return',
                      ),
                      ' title\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                    ),
                  ),
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'The ',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'title',
                  ),
                  " attribute should be removed once you have its content so the\nbrowser's default tooltip isn't displayed along with the tippy.",
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'p', components: a },
                  'With the beauty of higher-order functions, you can "enhance" the base tippy\nfunction with new functionality. To add this behavior by default, you can do\nsomething like this at the very top of your scripts before any calls to\n',
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'code',
                      components: a,
                      parentName: 'p',
                      props: { className: 'language-text' },
                    },
                    'tippy()',
                  ),
                  ':',
                ),
                c.a.createElement(
                  r.MDXTag,
                  {
                    name: 'div',
                    components: a,
                    props: {
                      className: 'gatsby-highlight',
                      'data-language': 'js',
                    },
                  },
                  c.a.createElement(
                    r.MDXTag,
                    {
                      name: 'pre',
                      components: a,
                      parentName: 'div',
                      props: { className: 'language-js' },
                    },
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: a,
                        parentName: 'pre',
                        props: { className: 'language-js' },
                      },
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token keyword' },
                        },
                        'function',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token function' },
                        },
                        'withTitleAttributeContent',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token parameter' },
                        },
                        'tippy',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token flow keyword' },
                        },
                        'return',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token parameter' },
                        },
                        'targets',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          ',',
                        ),
                        ' options ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token operator' },
                          },
                          '=',
                        ),
                        ' ',
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '{',
                        ),
                        c.a.createElement(
                          r.MDXTag,
                          {
                            name: 'span',
                            components: a,
                            parentName: 'span',
                            props: { className: 'token punctuation' },
                          },
                          '}',
                        ),
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token arrow operator' },
                        },
                        '=>',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      '\n    ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token flow keyword' },
                        },
                        'return',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token function' },
                        },
                        'tippy',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      'targets',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      '\n      ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token spread punctuation' },
                        },
                        '...',
                      ),
                      'options',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      '\n      ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token function' },
                        },
                        'content',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token parameter' },
                        },
                        'reference',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      '\n        ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token keyword' },
                        },
                        'if',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      'options',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token access property' },
                        },
                        'content',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '{',
                      ),
                      '\n          ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token flow keyword' },
                        },
                        'return',
                      ),
                      ' options',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token access property' },
                        },
                        'content',
                      ),
                      '\n        ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      '\n        ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token keyword' },
                        },
                        'const',
                      ),
                      ' title ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token operator' },
                        },
                        '=',
                      ),
                      ' reference',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'getAttribute',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'title'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\n        reference',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token func method' },
                        },
                        'removeAttribute',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token string' },
                        },
                        "'title'",
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\n        ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token flow keyword' },
                        },
                        'return',
                      ),
                      ' title\n      ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ',',
                      ),
                      '\n    ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                      '\n  ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      '\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '}',
                      ),
                      '\n\n',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token dom variable' },
                        },
                        'window',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '.',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token access property' },
                        },
                        'tippy',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token operator' },
                        },
                        '=',
                      ),
                      ' ',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token function' },
                        },
                        'withTitleAttributeContent',
                      ),
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        '(',
                      ),
                      'tippy',
                      c.a.createElement(
                        r.MDXTag,
                        {
                          name: 'span',
                          components: a,
                          parentName: 'code',
                          props: { className: 'token punctuation' },
                        },
                        ')',
                      ),
                    ),
                  ),
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'h3', components: a },
                  'What syntax theme is used on this website?',
                ),
                c.a.createElement(
                  r.MDXTag,
                  { name: 'ul', components: a },
                  c.a.createElement(
                    r.MDXTag,
                    { name: 'li', components: a, parentName: 'ul' },
                    "It's a theme I made called\n",
                    c.a.createElement(
                      r.MDXTag,
                      {
                        name: 'a',
                        components: a,
                        parentName: 'li',
                        props: {
                          href:
                            'https://github.com/atomiks/moonlight-vscode-theme',
                        },
                      },
                      'Moonlight',
                    ),
                    '!',
                  ),
                ),
              )
            }),
            a
          )
        })(c.a.Component)
      g.isMDXComponent = !0
      var u = {}
    },
  },
])
//# sourceMappingURL=component---src-pages-faq-mdx-8465d77c58065049d830.js.map
